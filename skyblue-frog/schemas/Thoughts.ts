export default {
  name: 'Thought',
  title: 'Thoughts',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'text',
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
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Posted On',
      name: 'postedOn',
      type: 'date',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
    },
  ],
}
