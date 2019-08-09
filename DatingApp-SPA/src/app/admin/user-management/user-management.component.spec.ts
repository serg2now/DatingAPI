/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserManagementComponent } from './user-management.component';

let component: UserManagementComponent;
let fixture: ComponentFixture<UserManagementComponent>;

describe('user-management component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserManagementComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserManagementComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});