import { Component } from '@angular/core'

@Component({
    template:`<div>找不到当前页面</div>`,
    styles:[`:host div{
        font-size:30px;
        color:'red';
        text-align:center;
    }`]
})

export class PageNotFound{

}