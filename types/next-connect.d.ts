// types/next-connect.d.ts
declare module 'next-connect' {
    import { NextApiRequest, NextApiResponse } from 'next';
    import { IncomingMessage, ServerResponse } from 'http';
  
    type Middleware = (
      req: IncomingMessage & NextApiRequest,
      res: ServerResponse & NextApiResponse,
      next: (err?: any) => void
    ) => void;
  
    interface Options {
      onError?: (
        err: any,
        req: IncomingMessage & NextApiRequest,
        res: ServerResponse & NextApiResponse,
        next: (err?: any) => void
      ) => void;
      onNoMatch?: (
        req: IncomingMessage & NextApiRequest,
        res: ServerResponse & NextApiResponse
      ) => void;
    }
  
    export default function nextConnect(
      options?: Options
    ): {
      use: (...middleware: Middleware[]) => any;
      get: (...middleware: Middleware[]) => any;
      post: (...middleware: Middleware[]) => any;
      put: (...middleware: Middleware[]) => any;
      delete: (...middleware: Middleware[]) => any;
      patch: (...middleware: Middleware[]) => any;
      handler: (
        req: IncomingMessage & NextApiRequest,
        res: ServerResponse & NextApiResponse
      ) => void;
    };
  }
  