import { JSX, Show, createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import { createStore } from 'solid-js/store'

import './card.css'

export function Card(props: {
	description: string | JSX.Element
	title?: string
	fullArticle: JSX.Element
	tags?: string[]
}) {
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

	function updateHistory(state: boolean) {
		if (state) {
			history.pushState(null, '')
		} else {
			history.back()
		}
	}

	function changeOpen(state: boolean, noHistoryUpdate = false) {
		if (!noHistoryUpdate && state !== open()) {
			updateHistory(state)
		}
		updateCardRect()
		enableBodyScrolling(!state)
		setOpen(state)
	}

	function closeOnEsc(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			changeOpen(false)
		}
	}

	function handlePopState(event: PopStateEvent) {
		if (open()) {
			changeOpen(false, true)
		}
	}

	onMount(() => {
		window.addEventListener('keydown', closeOnEsc)
		window.addEventListener('resize', updateCardRect)
		window.addEventListener('popstate', handlePopState)
	})
	onCleanup(() => {
		window.removeEventListener('keydown', closeOnEsc)
		window.removeEventListener('resize', updateCardRect)
		window.removeEventListener('popstate', handlePopState)
	})

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
				if (ev.key === ' ' || ev.key === 'Enter') {
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
						<div class="text">{props.title}</div>
					</div>
					<div class="description markdown-body">
						{open() ? props.fullArticle : props.description}
					</div>
					<Show when={!open()}>
						<div class="tags">
							{props.tags?.map((tag) => (
								<div class="tag">{tag}</div>
							))}
						</div>
					</Show>
				</div>
			</div>
		</div>
	)
}
