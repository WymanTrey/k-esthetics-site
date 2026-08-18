export interface IMenuItem {
    text: string;
    url: string;
}

export interface IService {
    name: string;
    duration: string;
    price: string;
}

export interface IServiceCategory {
    name: string;
    icon: JSX.Element;
    services: IService[];
}

export interface IPackage {
    name: string;
    description: string;
    price: string;
    savings: string;
}

export interface IReview {
    name: string;
    timeAgo: string;
    message: string;
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}
