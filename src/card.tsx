import { createSignal, onCleanup, onMount } from 'solid-js'
import { createStore } from 'solid-js/store'

import './card.css'

export function Card() {
	let container: HTMLDivElement
	let overlay: HTMLDivElement

	const [open, setOpen] = createSignal(false)
	function closeOnEsc(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			setOpen(false)
		}
	}
	onMount(() => {
		window.addEventListener('keydown', closeOnEsc)
	})
	onCleanup(() => {
		window.removeEventListener('keydown', closeOnEsc)
	})

	const [transitioning, setTransitioning] = createSignal(false)
	const [originalPositions, setOriginalPositions] = createStore({
		top: '0px',
		left: '0px',
		width: '0px',
		height: '0px',
	})

	function changeOpen(state: boolean) {
		const { top, left, width, height } = container.getBoundingClientRect()
		setOriginalPositions({
			top: `${top}px`,
			left: `${left}px`,
			width: `${width}px`,
			height: `${height}px`,
		})
		setTransitioning(true)
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setTransitioning(false)
			})
		})
		setOpen(state)
	}

	let [description, setDescription] = createSignal('')

	function updateDescription() {
		if (open()) {
			setDescription(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?`)
		} else {
			setDescription(
				`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?`
			)
		}
	}
	updateDescription()

	return (
		<div
			class="card"
			onClick={(ev) => {
				if (open()) {
					if (ev.target === overlay) {
						changeOpen(false)
					}
				} else {
					changeOpen(true)
				}
			}}
			classList={{ open: open(), transitioning: transitioning() }}
			style={{
				'--original-top': originalPositions.top,
				'--original-left': originalPositions.left,
				'--original-width': originalPositions.width,
				'--original-height': originalPositions.height,
			}}
		>
			<div class="overlay" ref={overlay!}></div>
			<div class="fake-container"></div>
			<div class="container" ref={container!}>
				<div class="title">
					<div class="icon"></div>
					<div class="text">Something Important</div>
				</div>
				<div
					class="description"
					onTransitionStart={() => {
						setDescription('')
					}}
					onTransitionEnd={updateDescription}
				>
					{description()}
				</div>
			</div>
		</div>
	)
}
