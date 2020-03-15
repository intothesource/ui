import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
    })
  )
  .add('<its-button>', () => ({
    template: `
      <its-button
        [disabled]="disabled"
        [outline]="outline"
        [color]="color"
        (click)="onClick($event)"
      >hello</its-button>
    `,
    props: {
      disabled: boolean(
        'Disabled',
        false
      ),
      outline: boolean(
        'Outline',
        false
      ),
      color: select(
        'Color',
        {
          Primary: 'primary',
          Secondary: 'secondary',
          None: '',
        },
        ''
      ),
      onClick: action('Button Clicked!')
    }
  }))
  .add('<button its-button>', () => ({
    template: `
      <button its-button>hello</button>
    `,
  }))
  .add('<a its-button>', () => ({
    template: `
      <a its-button>hello</a>
    `,
  }))
