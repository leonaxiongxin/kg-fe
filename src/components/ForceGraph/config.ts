export interface LinkFormat {
  source: number
  target: number
  value?: number
}

export interface NodeFormat {
  id: number
  text?: string
  group?: number
}

export enum NodeCategoryEnum {
  '时间 / TIME' = 1,
  '人物 / PER' = 2,
  '地点 / LOC' = 3,
  '机构 / ORG' = 4,
}

export const NodeCategory = Object.keys(NodeCategoryEnum).filter(
  (item) => !Number.isNaN(Number(item))
)
