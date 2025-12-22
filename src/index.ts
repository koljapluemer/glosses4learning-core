// Storage
export { GlossStorage } from './storage/GlossStorage.js'
export { deriveSlug } from './storage/slug.js'
export {
  attachTranslationWithNote,
  markGlossLog
} from './storage/glossOperations.js'

// Types
export type { Gloss, GlossRef, UsageInfo } from './storage/types.js'

// Relationship Rules
export {
  RELATIONSHIP_FIELDS,
  WITHIN_LANGUAGE_RELATIONS,
  SYMMETRICAL_RELATIONS,
  type RelationshipField
} from './storage/relationRules.js'

// Schema (re-export for validation)
export { default as glossSchema } from './schema/gloss.schema.json' assert { type: 'json' }
