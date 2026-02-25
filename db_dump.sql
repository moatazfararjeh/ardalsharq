--
-- PostgreSQL database dump
--

-- ...existing code...

-- Dumped from database version 18.2
-- Dumped by pg_dump version 18.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.brands OWNER TO postgres;

--
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.brands_id_seq OWNER TO postgres;

--
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id character varying(32) NOT NULL,
    name character varying(255) NOT NULL,
    icon character varying(8),
    color_class character varying(64)
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: product_images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_images (
    id integer NOT NULL,
    product_id integer,
    image_url text NOT NULL,
    image_data bytea
);


ALTER TABLE public.product_images OWNER TO postgres;

--
-- Name: product_images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_images_id_seq OWNER TO postgres;

--
-- Name: product_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_images_id_seq OWNED BY public.product_images.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    price numeric(10,2),
    image_url text,
    category character varying(100),
    category_id character varying(32),
    brand_id integer
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: Mutaz
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO "Mutaz";

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: Mutaz
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO "Mutaz";

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Mutaz
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- Name: product_images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_images ALTER COLUMN id SET DEFAULT nextval('public.product_images_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: Mutaz
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brands (id, name) FROM stdin;
1	نبيل
2	دجلة
3	الوادي
4	الوطنية
5	تب توب
6	أمريكانا
7	الإكرام
8	لورباك
9	هاربر
10	غير ذلك
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, icon, color_class) FROM stdin;
cheese	أجبان و مبشورة	🧀	category-cheese
nabil	منتجات نبيل	🍗	category-meat
wadi	منتجات الوادي	🍖	category-meat
americana	منتجات أمريكانا	🌽	category-vegetables
ikram	منتجات الإكرام	🫒	category-other
fish	أسماك	🐟	category-fish
potato	بطاطا	🍟	category-potato
vegetables	خضروات مجمدة	🥦	category-vegetables
butter	زبدة	🧈	category-butter
sausage	نقانق	🌭	category-sausage
other	منتجات أخرى	📦	category-other
\.


--
-- Data for Name: product_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_images (id, product_id, image_url, image_data) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price, image_url, category, category_id, brand_id) FROM stdin;
1	مبشورة 1 كيلو تركي	\N	\N	\N	\N	cheese	\N
2	مبشورة مصري	\N	\N	\N	\N	cheese	\N
3	موزاريلا بلوك تركي أونر	\N	\N	\N	\N	cheese	\N
4	موزاريلا بوك بلوك	\N	\N	\N	\N	cheese	\N
5	موزاريلا بلوك	\N	\N	\N	\N	cheese	\N
6	قشقوان بلوك	\N	\N	\N	\N	cheese	\N
7	شيدر بلوك بلجيكي	\N	\N	\N	\N	cheese	\N
8	شيدر بلوك ايرلندي	\N	\N	\N	\N	cheese	\N
9	شيدر أحمر بلجيكي	\N	\N	\N	\N	cheese	\N
10	شيدر أحمر ايرلندي	\N	\N	\N	\N	cheese	\N
11	قشقوان 700 غم	\N	\N	\N	\N	cheese	\N
12	جبنة دهن هنجاري 500 غم	\N	\N	\N	\N	cheese	\N
13	جبنة دهن هنجاري 200 غم	\N	\N	\N	\N	cheese	\N
14	جبنة شيدر هنجاري 370 غم	\N	\N	\N	\N	cheese	\N
100	إكرام موزريلا بلوك	\N	\N	\N	\N	cheese	\N
101	إكرام جبنة مكس مبروش 1 ك	\N	\N	\N	\N	cheese	\N
102	إكرام جبنة موزاريلا مبروش 1 ك	\N	\N	\N	\N	cheese	\N
15	كوردن بلو نبيل 750 غم	\N	\N	\N	\N	nabil	1
16	زنجر نبيل 900 غم	\N	\N	\N	\N	nabil	1
17	زنجر نبيل حار 900 غم	\N	\N	\N	\N	nabil	1
18	تندر نبيل 900 غم	\N	\N	\N	\N	nabil	1
19	برغر لحمة نبيل 450 غم	\N	\N	\N	\N	nabil	1
20	برغر دجاج نبيل 450 غم	\N	\N	\N	\N	nabil	1
21	برغر لحمة نبيل 900 غم	\N	\N	\N	\N	nabil	1
22	برغر دجاج نبيل 900 غم	\N	\N	\N	\N	nabil	1
23	برغر جامبو نبيل لحمة	\N	\N	\N	\N	nabil	1
24	برغر جامبو نبيل دجاج	\N	\N	\N	\N	nabil	1
25	برغر 24 قطعة نبيل (شنتة)	\N	\N	\N	\N	nabil	1
26	نجت نبيل 750 غم	\N	\N	\N	\N	nabil	1
27	نجت نبيل 900 غم	\N	\N	\N	\N	nabil	1
28	كبة نبيل 750 غم	\N	\N	\N	\N	nabil	1
29	كبة نبيل 900 غم	\N	\N	\N	\N	nabil	1
30	بوشار نبيل	\N	\N	\N	\N	nabil	1
31	صدر نبيل 2 كيلو	\N	\N	\N	\N	nabil	1
103	سمك فيليه نبيل	\N	\N	\N	\N	nabil	1
104	نجت تمبورة نبيل	\N	\N	\N	\N	nabil	1
105	نبيل أصابع جبنة موزريلا	\N	\N	\N	\N	nabil	1
106	نبيل روست اقتصادي 500 غم	\N	\N	\N	\N	nabil	1
107	نبيل ستربس عادي	\N	\N	\N	\N	nabil	1
108	نبيل ستربس حار	\N	\N	\N	\N	nabil	1
32	كبة دجلة	\N	\N	\N	\N	nabil	2
33	صدر الوادي 1 كيلو	\N	\N	\N	\N	wadi	3
34	زنجر الوادي 900 غم	\N	\N	\N	\N	wadi	3
35	تندر الوادي 900 غم	\N	\N	\N	\N	wadi	3
36	برغر دجاج الوادي 450 غم	\N	\N	\N	\N	wadi	3
37	برغر لحمة الوادي 450 غم	\N	\N	\N	\N	wadi	3
38	سكالوب الوادي 450 غم	\N	\N	\N	\N	wadi	3
39	سكالوب الوادي 24 قطعة	\N	\N	\N	\N	wadi	3
40	برغر جامبو لحمة الوادي	\N	\N	\N	\N	wadi	3
41	نجت الوادي 250 غم	\N	\N	\N	\N	wadi	3
42	كرات لحمة الوادي	\N	\N	\N	\N	wadi	3
43	مربعات لحمة الوادي	\N	\N	\N	\N	wadi	3
44	نقانق كيس الوادي	\N	\N	\N	\N	wadi	3
45	زنجر الوطنية	\N	\N	\N	\N	other	4
46	تندر الوطنية	\N	\N	\N	\N	other	4
109	زنجر تب توب	\N	\N	\N	\N	other	5
110	تندر تب توب	\N	\N	\N	\N	other	5
47	سمك فيليه فيتنامي	\N	\N	\N	\N	fish	\N
48	سمك فيليه	\N	\N	\N	\N	fish	\N
49	سمك فيليه صني سي	\N	\N	\N	\N	fish	\N
50	سمك زبيدي	\N	\N	\N	\N	fish	\N
51	سمك دنيس	\N	\N	\N	\N	fish	\N
52	سمك فلاسترو	\N	\N	\N	\N	fish	\N
53	سمك فوكلاند	\N	\N	\N	\N	fish	\N
54	سمك مكيس	\N	\N	\N	\N	fish	\N
111	روبيان	\N	\N	\N	\N	fish	\N
55	بطاطا ويدجيز	\N	\N	\N	\N	potato	\N
56	بطاطا بريميوم 2.5 كغم	\N	\N	\N	\N	potato	\N
57	بطاطا بريميوم 7×7 / 2.5 كغم	\N	\N	\N	\N	potato	\N
58	بطاطا بريميوم 9×9 / 2.5 كغم	\N	\N	\N	\N	potato	\N
59	بطاطا الأرز 2.5 كغم	\N	\N	\N	\N	potato	\N
60	بطاطا 900 غم الأرز	\N	\N	\N	\N	potato	\N
61	بطاطا بلجيكي 1 كيلو	\N	\N	\N	\N	potato	\N
62	بطاطا مصري 900 غم	\N	\N	\N	\N	potato	\N
112	بطاطا ودجز 1 كيلو بلجيكي	\N	\N	\N	\N	potato	\N
113	بطاطا 1 كيلو بلجيكي	\N	\N	\N	\N	potato	\N
114	بطاطا كرنكل 2.5 كغم	\N	\N	\N	\N	potato	\N
115	بطاطا كرنكل أمريكانا 1 كيلو	\N	\N	\N	\N	potato	\N
116	بطاطا أمريكانا 1 كيلو	\N	\N	\N	\N	potato	\N
117	بطاطا أمريكانا 2.5 كغم	\N	\N	\N	\N	potato	\N
118	بطاطا بلجيكي 2.5 كغم 7×7	\N	\N	\N	\N	potato	\N
119	بطاطا بلجيكي 2.5 كغم	\N	\N	\N	\N	potato	\N
120	بطاطا مصري 2.5 كغم	\N	\N	\N	\N	potato	\N
121	بطاطا Frigyes 2.5 / 7×7	\N	\N	\N	\N	potato	\N
122	بطاطا 900 غم كانزا	\N	\N	\N	\N	potato	\N
63	بازيلا و جزر هنجاري	\N	\N	\N	\N	vegetables	\N
64	بازيلا سادة هنجاري	\N	\N	\N	\N	vegetables	\N
65	ذرة هنجاري	\N	\N	\N	\N	vegetables	\N
66	بازيلا و جزر مصري	\N	\N	\N	\N	vegetables	\N
67	فراولة مصري	\N	\N	\N	\N	vegetables	\N
68	ملوخية مصري	\N	\N	\N	\N	vegetables	\N
69	بامية مصري نمرة	\N	\N	\N	\N	vegetables	\N
70	بامية مصري زيرو	\N	\N	\N	\N	vegetables	\N
71	بامية مصري إكسترا	\N	\N	\N	\N	vegetables	\N
72	رمان 1 كيلو	\N	\N	\N	\N	vegetables	\N
123	مانجا مصرية	\N	\N	\N	\N	vegetables	\N
124	فاصوليا مصري	\N	\N	\N	\N	vegetables	\N
73	فراولة 1 كيلو أمريكانا	\N	\N	\N	\N	americana	6
74	بازيلا و جزر أمريكانا	\N	\N	\N	\N	americana	6
75	بازيلا سادة أمريكانا	\N	\N	\N	\N	americana	6
76	بامية زيرو أمريكانا	\N	\N	\N	\N	americana	6
77	بامية ممتاز أمريكانا	\N	\N	\N	\N	americana	6
78	بامية إكسترا أمريكانا	\N	\N	\N	\N	americana	6
79	ملوخية أمريكانا	\N	\N	\N	\N	americana	6
80	فاصوليا أمريكانا	\N	\N	\N	\N	americana	6
81	فول أمريكانا	\N	\N	\N	\N	americana	6
82	خضار 7 أصناف أمريكانا	\N	\N	\N	\N	americana	6
83	سبانخ أمريكانا	\N	\N	\N	\N	americana	6
84	شوربة خضار أمريكانا	\N	\N	\N	\N	americana	6
85	خضار أمريكانا	\N	\N	\N	\N	americana	6
86	ذرة أمريكانا	\N	\N	\N	\N	americana	6
87	فول علب أمريكانا	\N	\N	\N	\N	americana	6
125	أمريكانا ستربس حار	\N	\N	\N	\N	americana	6
126	أمريكانا ستربس عادي	\N	\N	\N	\N	americana	6
127	أمريكانا برغر بقري جامبو	\N	\N	\N	\N	americana	6
128	أمريكانا برغر دجاج جامبو	\N	\N	\N	\N	americana	6
129	أمريكانا سمك فيليه	\N	\N	\N	\N	americana	6
130	زنجر أمريكانا 1 كغم	\N	\N	\N	\N	americana	6
88	إكرام ملوخية	\N	\N	\N	\N	ikram	7
89	إكرام بازيلا وجزر	\N	\N	\N	\N	ikram	7
90	إكرام بامية إكسترا	\N	\N	\N	\N	ikram	7
91	إكرام بامية زيرو	\N	\N	\N	\N	ikram	7
92	إكرام يخنة	\N	\N	\N	\N	ikram	7
93	إكرام خضار 7 أصناف	\N	\N	\N	\N	ikram	7
94	إكرام معجون طماطم	\N	\N	\N	\N	ikram	7
95	إكرام زيتون 1.56 كيلو	\N	\N	\N	\N	ikram	7
96	إكرام زيتون 400 غم	\N	\N	\N	\N	ikram	7
97	إكرام جبنة فيتا 125 غم	\N	\N	\N	\N	ikram	7
98	إكرام جبنة فيتا 400 غم	\N	\N	\N	\N	ikram	7
99	إكرام ذرة 170 غم	\N	\N	\N	\N	ikram	7
131	إكرام ذرة 400 غم	\N	\N	\N	\N	ikram	7
132	زبدة لورباك 100 غم	\N	\N	\N	\N	butter	8
133	زبدة لورباك غير مملحة 100 غم	\N	\N	\N	\N	butter	8
134	زبدة سنو واي 100 غم	\N	\N	\N	\N	butter	\N
135	زبدة أوكراني 100 غم	\N	\N	\N	\N	butter	\N
136	زبدة 500 غم	\N	\N	\N	\N	butter	\N
137	زبدة 1 كيلو	\N	\N	\N	\N	butter	\N
138	زبدة 25 كيلو	\N	\N	\N	\N	butter	\N
139	نقانق فروزن فريش	\N	\N	\N	\N	sausage	\N
140	نقانق تركي	\N	\N	\N	\N	sausage	\N
141	نقانق مايدا	\N	\N	\N	\N	sausage	\N
142	نقانق هاربر	\N	\N	\N	\N	sausage	\N
143	نقانق كويتي هاربر 24 حبة	\N	\N	\N	\N	sausage	9
144	مفتول بيتي	\N	\N	\N	\N	other	\N
145	مفتول بسمة 700 غم	\N	\N	\N	\N	other	\N
146	كبدة	\N	\N	\N	\N	other	\N
147	شيشبرك 500 غم لحمة	\N	\N	\N	\N	other	\N
148	شيشبرك 500 غم دجاج	\N	\N	\N	\N	other	\N
149	عجينة الهنا	\N	\N	\N	\N	other	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: Mutaz
--

COPY public.users (id, username, password, created_at) FROM stdin;
1	admin	$2b$10$w8Qw8Qw8Qw8Qw8Qw8Qw8QeQw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Q	2026-02-24 02:44:32.324773
2	Mutaz	$2b$10$hOtz99l0Zvf8FP4V/vOhie/NPbJajNBvVUnGxUXph4Rr11S3s/Eam	2026-02-24 02:59:46.898833
\.


--
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brands_id_seq', 10, true);


--
-- Name: product_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_images_id_seq', 3, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 153, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Mutaz
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: brands brands_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: product_images product_images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_images
    ADD CONSTRAINT product_images_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: Mutaz
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: Mutaz
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: product_images product_images_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_images
    ADD CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: products products_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.brands(id);


--
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: TABLE brands; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.brands TO "Mutaz";


--
-- Name: SEQUENCE brands_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.brands_id_seq TO "Mutaz";


--
-- Name: TABLE product_images; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.product_images TO "Mutaz";
GRANT ALL ON TABLE public.product_images TO user_db;


--
-- Name: SEQUENCE product_images_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.product_images_id_seq TO "Mutaz";


--
-- Name: TABLE products; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.products TO "Mutaz";
GRANT ALL ON TABLE public.products TO user_db;


--
-- Name: SEQUENCE products_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.products_id_seq TO "Mutaz";


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: Mutaz
--

GRANT SELECT ON TABLE public.users TO postgres;


--
-- PostgreSQL database dump complete
--

-- ...existing code...

