import React from 'react'
import hk from '../Components/hk.png'

export default function Header() {
	return (
		<div className="header">
			<img src={hk} alt="logo" width="70" height="50"/>
			<h1> Hash keep </h1>
		</div>
	)
}