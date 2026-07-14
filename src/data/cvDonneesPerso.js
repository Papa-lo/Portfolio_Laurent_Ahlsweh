const donneesPersonnelles = {
  nomComplet: import.meta.env.VITE_CV_NOM || '',
  localisation: import.meta.env.VITE_CV_LOCALISATION || '',
  telephone: import.meta.env.VITE_CV_TELEPHONE || '',
  email: import.meta.env.VITE_CV_EMAIL || '',
  github: import.meta.env.VITE_CV_GITHUB || '',
  portfolio: import.meta.env.VITE_CV_PORTFOLIO || ''
};

export default donneesPersonnelles;