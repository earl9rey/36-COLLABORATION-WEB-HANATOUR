# Storybook 스토리 작성 및 실행 안내

## 스토리 작성 위치

모든 컴포넌트의 스토리는 `src/stories/` 디렉토리 내에서 관리합니다.
<br/>
이는 스토리 구조를 통일성 있게 유지하고, 컴포넌트 문서화를 한 곳에서 집중적으로 관리하기 위함입니다.

> 컴포넌트의 실제 위치와 관계없이 스토리는 `src/stories/` 폴더 안에서만 작성해주세요.

<br/>

## 스토리 파일 작성 규칙

**파일명**: `컴포넌트명.stories.tsx`

- **(ex)** `MyModal.stories.tsx`, `SearchForm.stories.tsx`

<br/>

> 필요 시 `src/stories/` 하위에 기능별 디렉토리(`modals/`, `forms/` 등)를 만들어도 괜찮습니다.  
> 단, 최상위 `src/stories/` 폴더 안에서만 관리되어야 합니다.

<br/>

## 🚀 Storybook 실행

```bash
yarn storybook
```
