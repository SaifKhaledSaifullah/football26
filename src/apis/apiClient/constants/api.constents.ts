export const API_BASE = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://worldcup26.ir',
} as const;

export const API_ENDPOINTS = {
  TEAMS: '/get/teams',
  GAMES: '/get/games',
  GROUPS: '/get/groups',
  STADIUMS: '/get/stadiums',
} as const;

export const API_HEADERS = {
  DEFAULT: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
} as const;

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
