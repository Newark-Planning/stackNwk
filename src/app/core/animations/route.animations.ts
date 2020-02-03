import {
  animate,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { AnimationsService } from './animations.service';

export const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

const STEPS_ALL: Array<any> = [
  query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
    optional: true
  }),
  query(`:enter .${ROUTE_ANIMATIONS_ELEMENTS}`, style({ opacity: 0 }), {
    optional: true
  }),
  sequence([
    query(
      ':leave > *',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateY(-3%)', opacity: 0 })
        ),
        style({ position: 'fixed' })
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({
          opacity: 0,
          position: 'static',
          transform: 'translateY(-3%)'
        }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        )
      ],
      { optional: true }
    )
  ]),
  query(
    `:enter .${ROUTE_ANIMATIONS_ELEMENTS}`,
    stagger(75, [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate(
        '0.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      )
    ]),
    { optional: true }
  )
];
const STEPS_NONE: any = [];
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];

export const isRouteAnimationsAll = () => AnimationsService.isRouteAnimationsType('ALL');

export const isRouteAnimationsNone = () => AnimationsService.isRouteAnimationsType('NONE');

export const isRouteAnimationsPage = () => AnimationsService.isRouteAnimationsType('PAGE');

export const isRouteAnimationsElements = () => AnimationsService.isRouteAnimationsType('ELEMENTS');

export const routeAnimations: any = trigger('routeAnimations', [
  transition(isRouteAnimationsAll, STEPS_ALL),
  transition(isRouteAnimationsNone, STEPS_NONE),
  transition(isRouteAnimationsPage, STEPS_PAGE),
  transition(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
