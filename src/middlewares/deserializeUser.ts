import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';
import { verifyJwt } from '../utils/jwt.utils';

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, 'headers.authorization', '').replace(
    /^Bearer\s/,
    ''
  );

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);

  if (decoded) {
    res.locals.user = { decoded, isTokenExpired: expired };
    return next();
  }

  return next();
};

export default deserializeUser;
