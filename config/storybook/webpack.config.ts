import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const resolvePath = path.resolve(__dirname, '..', '..', 'src');

    config.resolve?.modules?.push(resolvePath);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(buildCssLoader(true));

    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules?.map((rule: any) => {
            if (/svg/.test(rule.test)) {
                return { ...rule, exclude: /\.svg/i };
            }

            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};
