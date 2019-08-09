/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RolesModalComponent } from './roles-modal.component';

let component: RolesModalComponent;
let fixture: ComponentFixture<RolesModalComponent>;

describe('roles-modal component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RolesModalComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RolesModalComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});