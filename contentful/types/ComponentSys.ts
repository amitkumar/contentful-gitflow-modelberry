export interface ComponentSys {
  space: SubSys;
  type: string;
  id: string;
  contentType: SubSys;
  revision: number;
  createdAt: Date;
  updatedAt: Date;
  environment: SubSys;
  locale: string;
}

export interface SubSys {
  sys: {
    id: string;
    linkType: string;
    type: string;
  };
}
