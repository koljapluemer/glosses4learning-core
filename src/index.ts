// Storage
export { GlossStorage } from './storage/GlossStorage'
export { deriveSlug } from './storage/slug'
export {
  attachTranslationWithNote,
  markGlossLog
} from './storage/glossOperations'

// Types
export type { Gloss, GlossRef, UsageInfo } from './storage/types'

// Relationship Rules
export {
  RELATIONSHIP_FIELDS,
  WITHIN_LANGUAGE_RELATIONS,
  SYMMETRICAL_RELATIONS,
  type RelationshipField
} from './storage/relationRules'

// Schema (re-export for validation)
export { default as glossSchema } from './schema/gloss.schema.json'
