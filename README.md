# @glosses4learning/core

Core storage and data models for glosses4learning applications.

## What's Inside

- `GlossStorage` - File-based storage for glosses
- Type definitions - `Gloss`, `GlossRef`, `UsageInfo`
- Slug generation - Filesystem-safe naming
- Relationship rules - Validation for 12 relationship types
- JSON schema - Data validation

## Install & Build

```bash
npm install
npm run build
```

## Lint

```bash
npm run lint
```

## Usage

```typescript
import { GlossStorage, type Gloss } from '@glosses4learning/core'

const storage = new GlossStorage('/path/to/data', '/path/to/situations')
const gloss = storage.loadGloss('eng', 'hello')
```

## Pure Refactoring

This package is extracted from the situation-based learning CMS with zero logic changes.
