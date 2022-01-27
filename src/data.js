export const data = [
  {
    text: ["<Button />", "&:hover &:focus"],
    properties: [],
  },
  {
    text: ['<Button variant="text" />', "&:hover &:focus"],
    properties: [
      {
        variant: "text",
      },
      {
        variant: "text",
        autofocus: true,
      },
    ],
  },
  {
    text: ['<Button variant="outline" />', "&:hover &:focus"],
    properties: [
      {
        variant: "outline",
      },
      {
        variant: "outline",
        autofocus: true,
      },
    ],
  },
  {
    text: ["<Button disabled />", '<Button variant="text" disabled/>'],
    properties: [
      {
        disabled: true,
      },
      {
        variant: "text",
        disabled: true,
      },
    ],
  },
  {
    text: [
      '<Button startIcon="fa fa-glass"/>',
      '<Button endIcon="fa fa-glass"/>',
    ],
    properties: [
      {
        type: "primary",
        startIcon: "fa fa-glass",
      },
      {
        type: "primary",
        endIcon: "fa fa-glass",
      },
    ],
  },
  {
    text: ['<Button size="sm"/>', '<Button size="md"/>', '<Button size="lg"/>'],
    properties: [
      {
        type: "primary",
        size: "sm",
      },
      {
        type: "primary",
        size: "md",
      },
      {
        type: "primary",
        size: "lg",
      },
    ],
  },
  {
    text: [
      '<Button color="default"/>',
      '<Button color="primary"/>',
      '<Button default="secondary"/>',
      '<Button default="danger"/>',
    ],
    properties: [
      {
        type: "default",
      },
      {
        type: "primary",
      },
      {
        type: "secondary",
      },
      {
        type: "danger",
      },
    ],
  },
];
