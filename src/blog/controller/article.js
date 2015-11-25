"use strict";
import Base from "./base.js";

export default class extends Base {
	indexAction(){
		let data = [
				{
						title: '这是第一个标题',
						author: 'fsy0718',
						time: '2015-11-25'
				},
				{
						title: '这是第二个标题',
						author: 'fsy0718',
						time: '2015-12-12'
				}
		]
		this.assign({list:data});
		return this.display();
	}
}
