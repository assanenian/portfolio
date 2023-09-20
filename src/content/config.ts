import { z, defineCollection } from "astro:content";

const experiencesSchema = z.object({
  experiences: z.array(
    z.object({
      title: z.string(),
      scopes: z.array(z.string()).optional(),
      subtitle: z.string(),
      slottilte: z.string().optional(),
      slot: z
        .array(
          z.object({
            desc: z.string(),
            project_link: z.string().optional(),
            stacks: z.array(z.string()).optional(),
          })
        )
        .optional(),
    })
  ),
});

const fields_prototype = z.array(
  z.object({
    title: z.string(),
    icon: z.string().optional(),
    isSvg: z.boolean().optional(),
    color: z.string().optional(),
  })
)

const skillsSchema = z.object({
  skills:
    z.object({
      languages: fields_prototype,
      framworks: fields_prototype,
    })
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  position: z.number(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  scopes: z.array(z.string()).optional(),
  stacks: z.array(z.string()).optional(),
  link: z.string().optional(),
});


export type ProjectSchema = z.infer<typeof projectSchema>;
export type ExperiencesSchema = z.infer<typeof experiencesSchema>;
export type SkillsSchema = z.infer<typeof skillsSchema>;

const projectCollection = defineCollection({ schema: projectSchema });
const experiencesCollection = defineCollection({ schema: experiencesSchema });
const skillsCollection = defineCollection({ schema: skillsSchema });

export const collections = {
  project: projectCollection,
  experiences: experiencesCollection,
  skills: skillsCollection,
};
