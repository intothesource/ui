import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { FormsModule } from '@angular/forms';
import { ToggleModule } from './toggle.module';

storiesOf('components|Toggle', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [ToggleModule, FormsModule],
    })
  )
  .add('basic', () => ({
    template: `
      <its-toggle
        [(ngModel)]="toggled"
        (ngModelChange)="onToggled($event)"
      ></its-toggle>
      <pre><code>toggled: {{ toggled | json }}</code></pre>
    `,
    props: {
      toggled: boolean('Toggled', false),
      onToggled: action('Toggled'),
    },
  }))
  .add('wrapped with label', () => ({
    template: `
      <label>
        <its-toggle
          [(ngModel)]="toggled"
          (ngModelChange)="onToggled($event)"
        ></its-toggle>
        This is a label for a toggle.
      </label>
      <pre><code>toggled: {{ toggled | json }}</code></pre>
    `,
    props: {
      toggled: boolean('Toggled', true),
      onToggled: action('Toggled'),
    },
  }))
  .add('with label id/for', () => ({
    template: `
      <its-toggle
        [(ngModel)]="toggled"
        (ngModelChange)="onToggled($event)"
        [id]="'abc-123'"
      ></its-toggle>
      <label for="abc-123">This is a label for a toggle.</label>
      <pre><code>toggled: {{ toggled | json }}</code></pre>
    `,
    props: {
      toggled: boolean('Toggled', true),
      onToggled: action('Toggled'),
    },
  }))
