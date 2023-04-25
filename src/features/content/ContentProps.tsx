export default interface ContentProps {
    imageUrl: string;
    imagePosition: ImagePosition;
    title: string;
    subtitle: string;
    description: string;        
    more: string;
}

export enum ImagePosition {LEFT, RIGHT}