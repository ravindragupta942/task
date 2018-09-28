import { trigger, transition, style, animate } from '@angular/animations';

const FADE_IN_ANIMATION = trigger(`fadeIn`, [
    transition(`:enter`, [
        style({ opacity: `0` }),
        animate(`0.5s ease-out`, style({ opacity: `1` })),
    ])
]);

const FADE_OUT_ANIMATION = trigger(`fadeOut`, [
    transition(`:leave`, [
        style({ opacity: `1` }),
        animate(`0.5s ease-in`, style({ opacity: `0` })),
    ])
]);

export {
    FADE_IN_ANIMATION,
    FADE_OUT_ANIMATION
}