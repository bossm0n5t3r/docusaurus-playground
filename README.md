# docusaurus-playground

이 웹사이트는 [Docusaurus](https://docusaurus.io/)로 만들어진 정적 사이트입니다.

## 설치

```bash
yarn
```

## 로컬 개발

```bash
yarn start
```

이 명령은 로컬 개발 서버를 실행하고 브라우저를 엽니다. 대부분의 변경 사항은 재시작 없이 바로 반영됩니다.

## 빌드

```bash
yarn build
```

이 명령은 정적 콘텐츠를 `build` 디렉터리에 생성하며, 정적 호스팅 서비스로 배포할 수 있습니다.

## 스크립트

### create-api-doc

API 문서 스텁을 `docs/` 하위에 생성합니다.

```bash
pnpm run create-api-doc -- path/api/v1.0.0
```

이 명령은 `docs/path/api/v1_0_0.md`를 생성합니다. 버전 세그먼트는 안전한 파일명으로 변환됩니다.
경로에 공백이 포함되면 `_`로 치환되므로, 공백이 있는 경로는 반드시 따옴표로 감싸 주세요.
또한 경로만 입력하고 버전을 생략하면 기본으로 `v1_0_0.md`를 생성합니다.

다른 예시:

```bash
pnpm run create-api-doc -- products/api/v2.3.1
pnpm run create-api-doc -- internal/payments/v2024-01
pnpm run create-api-doc -- "api/my api"
pnpm run create-api-doc -- "api/my api/v1.2.0"
```

생성 결과 예시:

- `docs/products/api/v2_3_1.md`
- `docs/internal/payments/v2024_01.md`
- `docs/api/my_api/v1_0_0.md`
- `docs/api/my_api/v1_2_0.md`

## 배포

SSH 사용:

```bash
USE_SSH=true yarn deploy
```

SSH 미사용:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

GitHub Pages로 호스팅하는 경우, 이 명령은 빌드 후 `gh-pages` 브랜치로 푸시하는 간편한 방법입니다.
