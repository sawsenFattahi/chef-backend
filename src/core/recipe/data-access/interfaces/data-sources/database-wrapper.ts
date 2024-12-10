export interface DatabaseWrapper {
    findOne: (id: string) => Promise<any>;
    find: () => Promise<any>;
    insertOne: (recipe: any) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}