import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { Counter } from "./components/counter.component";
import { HeadingComponent } from "./components/heading/heading.component";

export const customComponents: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
  {
    component: HeadingComponent,
    name: "Heading",
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'I am a heading',
      },
    ],
  }  
];
