/**
 * Centralized Type Definitions for Shivam Pawar Portfolio
 */

export type ProjectType = "web" | "mobile" | "desktop";
export type FilterType = "all" | "web" | "mobile" | "desktop";
export type SkillCategory = "All Skills" | "Programming Languages" | "Frontend" | "Backend" | "Databases & Cloud" | "Tools & DevOps";

export interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    images?: string[];
    secondary_images?: string[];
    github_link?: string;
    live_link?: string;
    tech_stack_names?: string[];
    features?: string[];
    project_type: ProjectType;
    created_at?: string;
}

export interface Skill {
    id?: number;
    skill_name: string;
    image?: string | null;
    width?: number | null;
    height?: number | null;
    category?: string | null;
}

export interface Certificate {
    id: number | string;
    title: string;
    issuer: string;
    issue_date: string;
    image_url: string;
    verification_url: string;
    duration: string;
    level: string;
    category: string;
    description: string;
    credential_id: string;
    skills: string[];
    type: 'certificate' | 'achievement';
    order_id?: number;
    created_at?: string;
}

export interface TimelineItem {
    id: number;
    type: 'Experience' | 'Education';
    title: string;
    institution: string;
    dateRange: string;
    location: string;
    duration: string;
    description: string[]; 
    technologies: string[];
    color: 'cyan' | 'purple';
    achievement?: string;
    order_id: number;
}

export interface HeroData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    resume_link: string;
    role: string;
    created_at: string;
}

export interface StatusData {
    id: string;
    type: 'current_company' | 'working_on' | 'recently_launched';
    label: string;
    value: string;
    icon: string;
    order_index: number;
    created_at: string;
    link_to?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface VisitorLog {
    id: number;
    visited_at: string;
    ip_address?: string;
}
