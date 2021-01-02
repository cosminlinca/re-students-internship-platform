import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, Router, Routes } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IOffer, Offer } from 'app/shared/model/offer.model';
import { OfferService } from './offer.service';
import { OfferComponent } from './offer.component';
import { OfferDetailComponent } from './offer-detail.component';
import { OfferUpdateComponent } from './offer-update.component';
import { OfferDetailsComponent } from '../../offer-details/offer-details.component';

@Injectable({ providedIn: 'root' })
export class OfferResolve implements Resolve<IOffer> {
  constructor(private service: OfferService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IOffer> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((offer: HttpResponse<Offer>) => {
          if (offer.body) {
            return of(offer.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Offer());
  }
}

export const offerRoute: Routes = [
  {
    path: '',
    component: OfferComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'studentsIntenshipPlatformAvraApp.offer.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: OfferDetailComponent,
    resolve: {
      offer: OfferResolve,
    },
    data: {
      authorities: [Authority.USER, Authority.STUDENT, Authority.COMPANY],
      pageTitle: 'studentsIntenshipPlatformAvraApp.offer.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: OfferUpdateComponent,
    resolve: {
      offer: OfferResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'studentsIntenshipPlatformAvraApp.offer.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: OfferUpdateComponent,
    resolve: {
      offer: OfferResolve,
    },
    data: {
      authorities: [Authority.USER, Authority.COMPANY],
      pageTitle: 'studentsIntenshipPlatformAvraApp.offer.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/details',
    component: OfferDetailsComponent,
    resolve: {
      offer: OfferResolve,
    },
    data: {
      authorities: [Authority.USER, Authority.STUDENT],
      pageTitle: 'studentsIntenshipPlatformAvraApp.offer.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
