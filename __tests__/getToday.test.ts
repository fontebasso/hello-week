import * as chai from 'chai';
import { JSDOM } from 'jsdom';
import * as mocha from 'mocha';
import { HelloWeek } from './../src/scripts/hello-week';

const expect = chai.expect;
const dom = new JSDOM(`<div class="hello-week">
            <div class="hello-week__header">
                <button class="hello-week__prev">Prev</button>
                <div class="hello-week__label"></div>
                <button class="hello-week__next">Next</button>
            </div>
            <div class="hello-week__week"></div>
            <div class="hello-week__month"></div>
        </div>`);
const helloWeek = new HelloWeek({
    selector: dom.window.document.querySelector('.hello-week'),
    langFolder: 'file://' + __dirname + '/../dist/langs/',
});

describe('Hello Week Method Get Today', () => {
    it('should be able to get current day' , () => {
        expect((new Date().setHours(0,0,0,0) / 1000).toString()).to.equal(helloWeek.getToday());
    });
});
