import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { RippleAnimationModule } from './ripple-animation.module';

storiesOf('Ripple Animation', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [RippleAnimationModule],
    })
  )
  .add('Default container', () => ({
    template:`
    <p its-ripple-animation>This is a p tag</p>
    <div style="width: 200px; height: 100px" its-ripple-animation>This is a div<button>This is a button</button></div>
    <button its-ripple-animation>This is a button</button>
    <a its-ripple-animation>This is a link tag</a>
    <its-ripple-animation>Using the component selector</its-ripple-animation>
    `
  }))
