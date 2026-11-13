import { lazy } from 'react';
export const TOOL_COMPONENTS = {
  'word-counter': lazy(() => import('./WordCounter.jsx')),
  'case-converter': lazy(() => import('./CaseConverter.jsx')),
  'json-formatter': lazy(() => import('./JsonFormatter.jsx')),
  'base64-encoder-decoder': lazy(() => import('./Base64Tool.jsx')),
  'url-encoder-decoder': lazy(() => import('./UrlTool.jsx')),
  'password-generator': lazy(() => import('./PasswordGenerator.jsx')),
};
