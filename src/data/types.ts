export interface Job {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date | null;
    location?: string;
    jobtype?: string;
    url?: string;
    duties?: string[];
    note?: string;
    noteurl?: string;
}

export interface Project {
    title: string;
    url: string;
    description: string;
    technologies: {
        name: string;
        url?: string;
    }[];
    featured: boolean;
    order: number;
}