import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mainpage',
	templateUrl: './mainpage.component.html',
	styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
	stats: Array<number> = [];
	rolled: boolean = false;
	abilities: any = [
		{
			'ability': 'Strength',
			'score': 10,
			'mod': 0
		},
		{
			'ability': 'Dexterity',
			'score': 10,
			'mod': 0
		},
		{
			'ability': 'Constitution',
			'score': 10,
			'mod': 0
		},
		{
			'ability': 'Intelligence',
			'score': 10,
			'mod': 0
		},
		{
			'ability': 'Wisdom',
			'score': 10,
			'mod': 0
		},
		{
			'ability': 'Charisma',
			'score': 10,
			'mod': 0
		}
	];

	constructor() {
	}

	ngOnInit() {
	}

	generateStats(e) {
		this.rolled = true;
		for (let i = 0; i < 6; i++) {
			let values = [];
			for (let j = 0; j < 4; j++) {
				values.push(Math.floor(Math.random() * 6) + 1)
			}
			console.log(values);
			let min = Math.min(values[0], values[1], values[2], values[3]);
			let idx = values.indexOf(min);
			values.splice(idx, 1);
			let sum = values[0] + values[1] + values[2];
			this.abilities[i].score = sum;
		}
	}

}
