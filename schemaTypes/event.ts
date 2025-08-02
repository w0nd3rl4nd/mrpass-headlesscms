import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        }),
        defineField({
            name: 'date',
            title: 'Start Date',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'datetime'
        }),
        defineField({
            name: 'hour',
            title: 'Event Hour',
            type: 'string'
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'long_description',
            title: 'Long Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'schedule',
            title: 'Schedule',
            type: 'text',
            rows: 10,
            description: 'Use format: [Date]\\nTime: Description'
        }),
        defineField({
            name: 'modality',
            title: 'Modality',
            type: 'string',
            options: {
                list: [
                    { title: 'In Person', value: 'in_person' },
                    { title: 'Online', value: 'online' },
                    { title: 'Hybrid', value: 'both' }
                ]
            }
        }),
        defineField({
            name: 'priceUSD',
            title: 'Price (USD)',
            type: 'number'
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
        }),
        defineField({
            name: 'ticketsSold',
            title: 'Tickets Sold',
            type: 'number',
            initialValue: 0
        }),
        defineField({
            name: 'maxTickets',
            title: 'Max Tickets',
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string'
        }),
        defineField({
            name: 'streamLink',
            title: 'Stream Link',
            type: 'url'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            date: 'date'
        },
        prepare(selection) {
            const { title, media, date } = selection
            const formattedDate = new Date(date).toLocaleDateString()
            return {
                title,
                media,
                subtitle: formattedDate
            }
        }
    }
})
