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
        maxlength: 96,
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
      type: 'array',
      of: [
        {
          type:'image',
          name:'image'
        },
        {
          type:'block',
          name:'block'
        }
      ]
    },
  ],
}
