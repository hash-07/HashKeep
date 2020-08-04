import React from 'react'

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div>
			<footer> copyright © {year} </footer> 
		</div>
	)
}