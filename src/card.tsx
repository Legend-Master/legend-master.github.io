import { createSignal, onCleanup, onMount } from 'solid-js'
import './card.css'

export function Card() {
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

	return (
		<>
			<div class="overlay" onClick={() => setOpen(false)} classList={{ open: open() }}></div>
			<div class="card" onClick={() => setOpen(true)} classList={{ open: open() }}>
				<div class="title">
					<div class="icon"></div>
					<div class="text">Something Important</div>
				</div>
				<div class="description">
					{open()
						? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptates quod esse veritatis est porro doloribus cumque voluptatum nostrum! Explicabo praesentium aspernatur recusandae molestiae harum sed consequatur quam ullam?`
						: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus molestiae
                        est sunt nemo cumque veritatis dicta recusandae sint harum perspiciatis, officia esse quas
                        voluptas voluptates voluptate illum numquam maiores.`}
				</div>
			</div>
		</>
	)
}
