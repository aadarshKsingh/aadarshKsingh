export default {
  name: 'Thought',
  title: 'Thoughts',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'object',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};