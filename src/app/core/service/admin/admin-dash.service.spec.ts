import { TestBed, getTestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminDashboardService } from "./admin-dash.service"
import { MOCK_USER_LIST } from "../../../../mock-data/services-mock";
import { environment } from "../../../../environments/environment.development";

fdescribe('AdminDashboardService', () => {

    let service : AdminDashboardService;
    let httpTestControl : HttpTestingController;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [AdminDashboardService],
            imports: [HttpClientTestingModule]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(AdminDashboardService);
        httpTestControl = TestBed.inject(HttpTestingController)
    })

    it('getUserList() should get all users', () => {
        service.getUserList().subscribe({
            next: res => {
                expect(res).toEqual(MOCK_USER_LIST)
            }
        })

        const req = httpTestControl.expectOne(`${environment.API_URL}/admin/users`);
        expect(req.request.method).toBe('GET')
        req.flush(MOCK_USER_LIST)
        httpTestControl.verify()
    })


})