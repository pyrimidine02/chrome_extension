import React, {useState, useEffect, JSX} from 'react';

type TokenResp = { jwt?: string };
type CountResp = { count: number };

export default function Popup(): JSX.Element {
    const [token, setToken] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState<string | null>(null);
    const [count, setCount] = useState<number | null>(null);

    // 팝업 열 때 JWT 꺼내오기
    useEffect(() => {
        chrome.storage.local.get('jwt', (data: TokenResp) => {
            if (data.jwt) setToken(data.jwt);
        });
    }, []);

    // 로그인 폼 제출(모의)
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('로딩 중…');
        await new Promise(r => setTimeout(r, 500));
        chrome.storage.local.set({ jwt: 'mock-jwt-token' }, () => {
            setToken('mock-jwt-token');
            setStatus(null);
        });
    };

    // 토큰 있으면 content script에 개수 요청
    useEffect(() => {
        if (!token) return;
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            const tabId = tabs[0]?.id;
            if (!tabId) return;
            chrome.tabs.sendMessage(
                tabId,
                { type: 'GET_REPLACED_COUNT' },
                (resp: CountResp) => setCount(resp.count)
            );
        });
    }, [token]);

    // 공통 스타일
    const card: React.CSSProperties = {
        width: 360,
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
    };
    const input: React.CSSProperties = {
        width: '100%', padding: '10px 12px', margin: '8px 0',
        border: '1px solid #ccc', borderRadius: 6, outline: 'none',
    };
    const button: React.CSSProperties = {
        width: '100%', padding: '10px 0', marginTop: 8,
        backgroundColor: '#4a90e2', color: '#fff',
        border: 'none', borderRadius: 6, cursor: 'pointer',
    };

    // 로그인 전 화면
    if (!token) {
        return (
            <div style={card}>
                <h2>토게 인포 로그인</h2>
                <form onSubmit={handleLogin}>
                    <input
                        style={input}
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        style={input}
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button style={button} type="submit">
                        로그인
                    </button>
                </form>
                {status && <p style={{ color: '#888' }}>{status}</p>}
            </div>
        );
    }

    // 로그인 후 화면
    return (
        <div style={card}>
            <h2>토게 인포</h2>
            <p>변경된 검색 결과: {count ?? '…'}개</p>
            <button
                style={button}
                onClick={() => {
                    setCount(null);
                    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                        const tabId = tabs[0]?.id;
                        if (!tabId) return;
                        chrome.tabs.sendMessage(
                            tabId,
                            { type: 'GET_REPLACED_COUNT' },
                            (resp: CountResp) => setCount(resp.count)
                        );
                    });
                }}
            >
                새로고침
            </button>
        </div>
    );
}
