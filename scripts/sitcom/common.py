# Shared cast, season list and beat helpers for "Totally Raotional: Runtime Error" (Season 3, IGCSE CS 0478).
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=...) and call the helpers below.

VOICES = {
    "tara":    dict(voice="af_heart", speed=1.06, lang="en-us"),
    "mum":     dict(voice="bf_emma", speed=1.08, lang="en-gb"),
    "dad":     dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "centi":   dict(voice="bm_lewis", speed=1.08, lang="en-gb"),
    "globo":   dict(voice="bm_lewis", speed=1.1, lang="en-gb"),
    "cashier": dict(voice="am_puck", speed=1.12, lang="en-us"),
    "teacher": dict(voice="af_sarah", speed=1.02, lang="en-us"),
    "uncle":   dict(voice="am_michael", speed=1.0, lang="en-us"),
}

SHOW = "TOTALLY RAOTIONAL"
SHOW_TAG = "RUNTIME ERROR"
SEASON_NUM = 3
TEACHER = "centi"   # Silicon mentor running the holo-board and pause challenges

# Season 3 running order = IGCSE CS 0478 topic order (lib/topics/meta.ts).
# (num, topic id, short topic name, episode title)
SEASON = [
    (1, "number-systems", "Number Systems", "Overflow At The Hawker Stall"),
    (2, "data-media-compression", "Data & Compression", "Divide By Ten Twenty Four"),
    (3, "data-transmission", "Data Transmission", "Lost In The Packet Switch"),
    (4, "hardware-architecture", "CPU & Storage", "Fetch, Decode, Disaster"),
    (5, "software-security-ai", "Software, Security & AI", "Phishing For Compliments"),
    (6, "logic-gates", "Logic Gates", "Exclusive Or Nothing"),
    (7, "algorithms-testing", "Algorithms & Testing", "Bubble Sort Your Life Out"),
    (8, "python-arrays-sql", "Python, Arrays & SQL", "Select Star From Chaos"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "mall", "checkout", "classroom", "hawker", "park",
        "beach", "desert", "polar", "mountain", "megacity", "reef", "weatherdesk"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "cushion", "book", "plate", "map", "dice", "calculator", "compass", "paintroller",
         "globe", "umbrella", "sunglasses", "binoculars", "bucket"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.5):
    num, _, _, t = _ep()
    B.append(dict(type="title", title=SHOW, tag=SHOW_TAG, sub=f"Season {SEASON_NUM} · Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else f"That's a wrap on Season {SEASON_NUM}!"
    B.append(dict(type="card", text=f"{SHOW}: {SHOW_TAG}", sub=sub, dur=dur))
