// e.g. (min-width: 30rem)
export type MediaExpression = string & { _tacky_id_media_expression: never };

// e.g. screen
export type MediaType = string & { _tacky_id_media_type: never };

// e.g. screen and (min-width: 30rem)
export type MediaTypeExpression = string & {
  _tacky_id_media_type_expression: never;
};

export type AnyMediaMember = MediaType | MediaExpression | MediaTypeExpression;

// e.g. @media screen and (min-width: 30rem)
export type MediaQuery = string & { _tacky_id_media_query: never };
