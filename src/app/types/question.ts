
type AllowedTypes = 'FEATURE' | 'ERROR' | 'BEST_PRACTICE';
type AllowedTags =  'MONGO_DB' | 'POSTGRES'

export interface QuestionDto {
    userId: string;
    title: string;
    body?: string;
    tags: AllowedTags;
    type: AllowedTypes;
}