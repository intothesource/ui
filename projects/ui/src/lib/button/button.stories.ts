import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { ButtonModule } from './button.module';

storiesOf('components|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [ButtonModule],
    })
  )
  .add('<its-button>', () => ({
    template: `
      <its-button
        [disabled]="disabled"
        [outline]="outline"
        [color]="color"
        (click)="onClick($event)"
      >Inloggen</its-button>
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
  .add('Variants', () => ({
    template: `
      <h2>Solid button variants</h2>
      <table [attr.cellpadding]=cellpadding>
        <thead>
          <tr>
            <th></th>
            <th>Default</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default</th>
            <td><button its-button>{{ text }}</button></td>
            <td><button its-button disabled>{{ text }}</button></td>
          </tr>
          <tr>
            <th>Primary</th>
            <td><button its-button color="primary">{{ text }}</button></td>
            <td><button its-button color="primary" disabled>{{ text }}</button></td>
          </tr>
          <tr>
            <th>Secondary</th>
            <td><button its-button color="secondary">{{ text }}</button></td>
            <td><button its-button color="secondary" disabled>{{ text }}</button></td>
          </tr>
        </tbody>
      </table>

      <br>
      <br>
      <h2>Outline button variants</h2>
      <table [attr.cellpadding]=cellpadding>
        <thead>
          <tr>
            <th></th>
            <th>Default</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default</th>
            <td><button its-button outline>{{ text }}</button></td>
            <td><button its-button outline disabled>{{ text }}</button></td>
          </tr>
          <tr>
            <th>Primary</th>
            <td><button its-button color="primary" outline>{{ text }}</button></td>
            <td><button its-button color="primary" outline disabled>{{ text }}</button></td>
          </tr>
          <tr>
            <th>Secondary</th>
            <td><button its-button color="secondary" outline>{{ text }}</button></td>
            <td><button its-button color="secondary" outline disabled>{{ text }}</button></td>
          </tr>
        </tbody>
      </table>
    `,
    props: {
      cellpadding: 10,
      text: text('Text', 'Button Text'),
    }
  }))
  .add('Button with animated ripple', () => ({
    template: `
      <its-button><span its-ripple-animation>A Small Wave</span></its-button>
    `
  }))
