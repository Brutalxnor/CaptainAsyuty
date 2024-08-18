declare module 'formidable' {
    import { IncomingMessage } from 'http';
  
    export interface Fields {
      [key: string]: string | string[];
    }
  
    export interface Files {
      [key: string]: File | File[];
    }
  
    export interface File {
      size: number;
      path: string;
      name: string;
      type: string;
      lastModifiedDate?: Date;
      hash?: string;
      toJSON: () => object;
    }
  
    export class IncomingForm {
      encoding: string;
      uploadDir: string;
      keepExtensions: boolean;
      maxFileSize: number;
      maxFields: number;
      maxFieldsSize: number;
      hash: boolean | string;
      multiples: boolean;
  
      parse(
        req: IncomingMessage,
        callback?: (
          err: Error | null,
          fields: Fields,
          files: Files
        ) => void
      ): void;
  
      on(event: string, listener: (...args: any[]) => void): this;
    }
  }
  