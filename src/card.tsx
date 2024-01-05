import { createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import { createStore } from 'solid-js/store'

import './card.css'

export function Card() {
	let card: HTMLDivElement
	let overlay: HTMLDivElement

	const [open, setOpen] = createSignal(false)
	const [cardRect, setCardRect] = createStore({
		top: '0px',
		left: '0px',
		width: '100%',
		height: '100%',
	})

	function updateCardRect() {
		const { top, left, width, height } = card.getBoundingClientRect()
		setCardRect({
			top: `${top}px`,
			left: `${left}px`,
			width: `${width}px`,
			height: `${height}px`,
		})
	}
	onMount(() => {
		updateCardRect()
	})

	function enableBodyScrolling(enable: boolean) {
		if (enable) {
			document.body.style.paddingRight = ''
			document.body.style.overflow = ''
		} else {
			document.body.style.paddingRight = `${
				window.innerWidth - document.documentElement.clientWidth
			}px`
			document.body.style.overflow = 'hidden'
		}
	}

	function changeOpen(state: boolean) {
		updateCardRect()
		enableBodyScrolling(!state)
		setOpen(state)
	}

	function closeOnEsc(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			changeOpen(false)
		}
	}
	onMount(() => {
		window.addEventListener('keydown', closeOnEsc)
	})
	onCleanup(() => {
		window.removeEventListener('keydown', closeOnEsc)
	})

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
			tabindex="0"
			onClick={(ev) => {
				if (open()) {
					if (ev.target === overlay) {
						changeOpen(false)
					}
				} else {
					changeOpen(true)
				}
			}}
			onKeyDown={(ev) => {
				if (ev.key === ' ') {
					changeOpen(!open())
					ev.preventDefault()
				}
			}}
			classList={{ open: open() }}
			style={{
				'--card-top': cardRect.top,
				'--card-left': cardRect.left,
				'--card-width': cardRect.width,
				'--card-height': cardRect.height,
			}}
			ref={card!}
		>
			<div class="overlay" ref={overlay!}></div>
			<div class="container-decor">
				<div class="container">
					<div class="title">
						<div class="icon"></div>
						<div class="text">Some Project</div>
					</div>
					<div class="description">
						{
							// description()
							open()
								? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?`
								: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?`
						}
					</div>
				</div>
			</div>
		</div>
	)
}
