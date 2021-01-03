import config from '../../data/SiteConfig';

export const useConfigMySocialLinks = (snsName: 'github' | 'twitter' | 'linkedin'): string => {
  return config.mySocials?.find((_) => _.icon === snsName)?.url ?? '';
}