import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const experiencesSchema = z.object({
    experiences: z.array(z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        subtitle: z.string(),
        slottilte: z.string().optional(),
        slot: z.array(z.object({
            desc: z.string(),
            project_link: z.string().optional(),
            stacks: z.array(z.string()).optional(),
        })).optional()
    }))
});

const skillsSchema = z.object({
    skills: z.array(z.object({
        title: z.string(),
        icon: z.string().optional(),
        svg: z.string().optional(),
        link: z.string().optional(),
        color: z.string().optional(),
    }))
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    position: z.number(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    stacks: z.array(z.string()).optional(),
    link: z.string().optional(),
});


const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing:  z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;
export type ExperiencesSchema = z.infer<typeof experiencesSchema>;
export type SkillsSchema = z.infer<typeof skillsSchema>;



const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const projectCollection = defineCollection({ schema: projectSchema });
const experiencesCollection = defineCollection({ schema: experiencesSchema });
const skillsCollection = defineCollection({ schema: skillsSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'project': projectCollection,
    'experiences': experiencesCollection,
    'skills': skillsSchema
}