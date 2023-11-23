import passport from 'passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { User } from '../entities/user.entity';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  ignoreExpiration: false
};

export const jwtStrategy = new Strategy(options, async (payload, done) => {
  try {
    const user = await User.findOneBy({ id: payload.sub });

    if (user) return done(null, user);
  } catch (error) {
    return done(error, false);
  }
  return done(null, false);
});

passport.use(jwtStrategy);
passport.initialize();

export const authMiddleware = passport.authenticate('jwt', { session: false });
